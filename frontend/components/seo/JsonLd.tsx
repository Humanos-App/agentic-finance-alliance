/**
 * Renders a JSON-LD structured-data block. Server component — emits a
 * <script type="application/ld+json"> with no client-side JavaScript.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, build-time content — not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
