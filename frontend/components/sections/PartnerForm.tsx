"use client";

import { startTransition, useActionState, useState } from "react";
import {
  sendPartnerRequest,
  type PartnerRequestState,
} from "@/app/actions/partner-request";
import { PARTNER_CTA } from "@/lib/dinners";

const BLANK = { name: "", email: "", company: "", goals: "" };
type Field = keyof typeof BLANK;

const initialState: PartnerRequestState = null;

export function PartnerForm() {
  // "Send another" remounts the form, which also clears the action state.
  const [round, setRound] = useState(0);
  return <Form key={round} onReset={() => setRound((r) => r + 1)} />;
}

function Form({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(
    sendPartnerRequest,
    initialState,
  );
  const [f, setF] = useState(BLANK);

  const set =
    (k: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });
  const ready = f.name.trim() && f.email.includes("@") && f.company.trim();

  // Submit through a transition rather than <form action>, so React 19
  // doesn't reset the fields when the server sends back an error.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  };

  if (state && "ok" in state && state.ok) {
    return (
      <div className="afa-form afa-sent" role="status">
        <b>Thanks, {f.name.trim().split(" ")[0]}.</b>
        <p>We will be in touch at {f.email.trim()}.</p>
        <button
          type="button"
          className="afa-btn afa-btn-line"
          onClick={onReset}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="afa-form" onSubmit={onSubmit} noValidate>
      <input
        name="name"
        placeholder="Name"
        aria-label="Name"
        autoComplete="name"
        value={f.name}
        onChange={set("name")}
      />
      <input
        name="email"
        type="email"
        placeholder="Work email"
        aria-label="Work email"
        autoComplete="email"
        value={f.email}
        onChange={set("email")}
      />
      <input
        name="company"
        placeholder="Company"
        aria-label="Company"
        autoComplete="organization"
        value={f.company}
        onChange={set("company")}
      />
      <textarea
        name="goals"
        placeholder="What are your goals for the dinner?"
        aria-label="What are your goals for the dinner?"
        value={f.goals}
        onChange={set("goals")}
      />
      {state && "error" in state && state.error && (
        <p className="afa-form-error" role="alert">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        className="afa-btn afa-btn-cream afa-btn-lg"
        disabled={!ready || isPending}
      >
        {isPending ? "Sending…" : PARTNER_CTA}
      </button>
    </form>
  );
}
