import { LEDGER } from "@/lib/ledger";

export function Statement() {
  return (
    <section className="afa-punch">
      <pre className="afa-ledger" aria-hidden="true">
        {LEDGER}
      </pre>
      <div className="afa-wrap">
        <h2>
          <span className="afa-punch-l">
            AI is changing what financial services can do.
          </span>
          <span className="afa-punch-l">Nobody figures that out alone.</span>
        </h2>
      </div>
    </section>
  );
}
