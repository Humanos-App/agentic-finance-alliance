import { PARTNER_CTA } from "@/lib/dinners";
import { PartnerForm } from "./PartnerForm";

export function Apply() {
  return (
    <section id="apply" className="afa-apply">
      <div className="afa-wrap afa-apply-in">
        <div>
          <div className="afa-eb afa-eb-soft">Partner with us</div>
          <h2>{PARTNER_CTA}</h2>
          <p>Tell us about your company and your goals.</p>
        </div>
        <PartnerForm />
      </div>
    </section>
  );
}
