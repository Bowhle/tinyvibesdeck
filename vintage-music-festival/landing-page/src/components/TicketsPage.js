import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './TicketsPage.css';

function useTierDefaults() {
  const [params] = useSearchParams();
  const qty = Number(params.get('qty')) || 2;
  const price = Number(params.get('price')) || 250;
  return { qty, price };
}

function TicketsPage() {
  const { qty: initialQty, price: initialPrice } = useTierDefaults();
  const [qty, setQty] = React.useState(initialQty);
  const [pricePerTwo] = React.useState(250);

  // recompute bundle price based on qty: every 2 costs R250
  const bundles = Math.ceil(qty / 2);
  const total = bundles * pricePerTwo;

  const [form, setForm] = React.useState({
    parentName: '',
    childName: '',
    childSurname: '',
    email: '',
    phone: '',
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `Tickets reserved!\n` +
      `Qty: ${qty}\nTotal: R${total}\n` +
      `Parent: ${form.parentName}\n` +
      `Child: ${form.childName} ${form.childSurname}\n` +
      `Contact: ${form.email || form.phone}`
    );
  };

  return (
    <div className="container form">
      <div className="form-card">
        <h1 className="heading" style={{ marginTop: 0 }}>
          Checkout
        </h1>

        <form onSubmit={onSubmit}>
          <div className="row">
            <div>
              <label htmlFor="qty">Number of tickets</label>
              <select
                id="qty"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[2,4,6,8,10,12].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Parent/Guardian full name</label>
              <input value={form.parentName} onChange={set('parentName')} required />
            </div>

            <div>
              <label>Child name</label>
              <input value={form.childName} onChange={set('childName')} required />
            </div>

            <div>
              <label>Child surname</label>
              <input value={form.childSurname} onChange={set('childSurname')} required />
            </div>

            <div>
              <label>Email address</label>
              <input type="email" value={form.email} onChange={set('email')} />
            </div>

            <div>
              <label>Cell number</label>
              <input type="tel" value={form.phone} onChange={set('phone')} />
            </div>
          </div>

          <div className="summary">
            Bundle price: R250 per 2 • You selected {qty} → Total <strong>R{total}</strong>
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <button className="btn" type="submit">Reserve Tickets</button>
            <Link className="btn btn-outline" to="/">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TicketsPage;
