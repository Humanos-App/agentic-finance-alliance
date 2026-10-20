function Apply() {
  const blank = { name: '', email: '', company: '', want: '' };
  const [f, setF] = React.useState(blank);
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const ready = f.name.trim() && f.email.includes('@') && f.company.trim();
  return (
    <section id="apply" className="v2-apply">
      <div className="v2-wrap v2-apply-in">
        <div>
          <div className="v2-eb v2-eb-soft">Partner with us</div>
          <h2>Become a partner for the next dinner.</h2>
          <p>Tell us about your company and your goals.</p>
        </div>
        {sent ? (
          <div className="v2-form v2-sent">
            <b>Thanks, {f.name.split(' ')[0]}.</b>
            <p>We will be in touch at {f.email}.</p>
            <button className="v2-btn v2-btn-line" onClick={() => { setSent(false); setF(blank); }}>Send another</button>
          </div>
        ) : (
          <div className="v2-form">
            <input placeholder="Name" value={f.name} onChange={set('name')} />
            <input placeholder="Work email" value={f.email} onChange={set('email')} />
            <input placeholder="Company" value={f.company} onChange={set('company')} />
            <textarea placeholder="What are your goals for the dinner?" value={f.want} onChange={set('want')}></textarea>
            <button className="v2-btn v2-btn-cream v2-btn-lg" disabled={!ready} onClick={() => setSent(true)}>Become a partner for the next dinner.</button>
          </div>
        )}
      </div>
    </section>
  );
}
Object.assign(window, { Apply });
