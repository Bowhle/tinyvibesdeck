import React from "react";

function Row({ label, value }) {
    return (
        <div style={{ display: 'grid', gap: 6}}>
            <span
                style={{
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '.6px',
                    fontSize: 16,
                    color: 'var(--ink)'
                }}
            >
                {label}
            </span>
            <span
                style={{ fontsize: 18}}>{value}</span>
        </div>
    );
}

function EventDetails() {
    return (
        <section id="details" className="container card">
            <h2 className="heading"
            style={{ 
                marginTop: 0,
                alignItems: 'center',
                textAlign: 'center'}}>
                Event Details
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 32,
                    textAlign: 'center',
                }}
            >
                <Row label="venue" value="Blairgowrie Primary School Hall" />
                <Row label="Date" value="Saturday, 6th December 2025" />
                <Row label="Time" value="10:00 AM" />
            </div>

            <hr
            style={{
                margin: '24px 0',
                border: 'none',
                height: 1,
                backgroundColor: 'var(--border)',
            }}            
            />

            <p style={{
               fontSize: 16,
               margin: 0,
               textAlign: 'center',
            }}>
            Dress to impress in your favorite retro fits.<br>
            </br>
            Expect classics, sing-alongs, a family-friendly groove floor,
            and sweet treats. <br></br>Limited seats.
            </p>
        </section>
    );
}

export default EventDetails;
