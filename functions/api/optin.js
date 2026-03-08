export async function onRequestPost(context) {
  const body = await context.request.json();

  if (!body.email || !body.consent) {
    return new Response(JSON.stringify({
      ok: false,
      error: "Missing required fields"
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const payload = {
    name: body.name || "",
    email: body.email || "",
    consent: !!body.consent,
    source_page: body.source_page || ""
  };

  const res = await fetch("https://script.google.com/macros/s/AKfycbxYMz_uUMsq0VEU9HeymH5fSObyAswC34Ozn7WEBkz0P4J3B8L9cdFUUnGxLrRfzqcJ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();

  return new Response(text, {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
