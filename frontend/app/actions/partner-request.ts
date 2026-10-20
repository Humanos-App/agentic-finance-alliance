"use server";

/**
 * PartnerForm Server Action.
 *
 * Sends the partner-form payload via MailerSend's transactional API
 * (https://developers.mailersend.com/api/v1/email.html), the same way the
 * humanos.tech contact form does. The email comes from a verified sender
 * domain (configured via env), and the submitter's own address goes in
 * Reply-To so replies thread back to them naturally.
 *
 * Required env vars:
 *   MAILERSEND_API_KEY        — API token from the MailerSend dashboard
 *                               (Settings → Tokens → "Add token", with
 *                               at least the "Email" sending permission).
 *   MAILERSEND_FROM_EMAIL     — A verified sender address on a domain
 *                               you've added in MailerSend (e.g.
 *                               noreply@humanos.tech). Required by
 *                               MailerSend's sender-domain policy.
 *   MAILERSEND_FROM_NAME      — Optional. Display name shown in the
 *                               "From" line. Defaults to "AFA Website".
 *
 * Add the same vars in Vercel → Settings → Environment Variables so
 * production has them too.
 */

export type PartnerRequestState =
  | { ok: true }
  | { ok?: false; error: string }
  | null;

/** Partnerships contact (as on the sponsorship one-pager). */
const TO = { email: "wgomes@humanos.tech", name: "Wilson" };
const CC = [
  { email: "pedro@humanos.tech", name: "Pedro" },
  { email: "rodrigo@humanos.tech", name: "Rodrigo" },
];

const FALLBACK = `Please email us directly at ${TO.email}.`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendPartnerRequest(
  _prev: PartnerRequestState,
  formData: FormData,
): Promise<PartnerRequestState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const goals = String(formData.get("goals") ?? "").trim();

  /* ---------- Validation ---------- */
  if (!name) return { error: "Please add your name." };
  if (!EMAIL_RE.test(email)) return { error: "Please add a valid work email." };
  if (!company) return { error: "Please add your company." };
  if (name.length > 200 || company.length > 200) {
    return { error: "Please keep your name and company shorter." };
  }
  if (goals.length > 5000) return { error: "Your goals are too long." };

  const apiKey = process.env.MAILERSEND_API_KEY;
  const fromEmail = process.env.MAILERSEND_FROM_EMAIL;
  const fromName = process.env.MAILERSEND_FROM_NAME || "AFA Website";

  if (!apiKey || !fromEmail) {
    console.error(
      "[partner-request] MAILERSEND_API_KEY or MAILERSEND_FROM_EMAIL not set",
    );
    return { error: `The form is not set up yet. ${FALLBACK}` };
  }

  /* ---------- Build the payload ---------- */
  const subject = `AFA · partner request from ${name} (${company})`;
  const body = goals || "(No goals added.)";
  const text = `${body}\n\n—\n${name}\n${company}\n${email}`;
  const html = [
    `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:15px;line-height:1.55;color:#14342B">`,
    `<p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#2E6B52">Partner request</p>`,
    `<p style="white-space:pre-wrap;margin:0 0 20px">${escapeHtml(body)}</p>`,
    `<hr style="border:0;border-top:1px solid #E0DACE;margin:24px 0" />`,
    `<p style="margin:0;color:#5E6B63;font-size:13px">`,
    `<strong style="color:#14342B">${escapeHtml(name)}</strong><br>`,
    `${escapeHtml(company)}<br>`,
    `<a href="mailto:${escapeHtml(email)}" style="color:#2E6B52;text-decoration:none">${escapeHtml(email)}</a>`,
    `</p>`,
    `</div>`,
  ].join("");

  const payload = {
    from: { email: fromEmail, name: fromName },
    to: [TO],
    cc: CC,
    reply_to: { email, name },
    subject,
    text,
    html,
  };

  /* ---------- Send ---------- */
  try {
    const res = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    /* MailerSend returns 202 Accepted on success. Any non-2xx is a
       failure — log the body for debugging but only surface a generic
       message to the user. */
    if (!res.ok) {
      const resBody = await res.text().catch(() => "");
      console.error(
        `[partner-request] MailerSend ${res.status}: ${resBody.slice(0, 800)}`,
      );
      return { error: `We could not send that. Please try again. ${FALLBACK}` };
    }

    return { ok: true };
  } catch (err) {
    console.error("[partner-request] Network error:", err);
    return { error: `We could not send that. Please try again. ${FALLBACK}` };
  }
}
