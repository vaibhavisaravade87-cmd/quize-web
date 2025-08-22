* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, Arial, sans-serif;
  background: #f4f6fb;
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.quiz-container {
  width: min(92vw, 560px);
  background: #fff;
  border-radius: 16px;
  padding: 24px 24px 28px;
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
}
h1 {
  margin: 0 0 6px;
  font-size: 22px;
  color: #111827;
}
#progress {
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 12px;
}
h2 {
  margin: 10px 0 14px;
  font-size: 18px;
  color: #111827;
  line-height: 1.35;
}
ul.options {
  list-style: none;
  padding: 0;
  margin: 0 0 14px;
  display: grid;
  gap: 10px;
}
ul.options li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  transition: background .2s, border-color .2s;
}
ul.options li:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}
ul.options input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: #2563eb; /* shows the blue tick/dot */
}
ul.options label {
  cursor: pointer;
  color: #1f2937;
}

button#submit {
  width: 100%;
  border: 0;
  background: #2563eb;
  color: #fff;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .2s, transform .02s;
}
button#submit:hover { background: #1d4ed8; }
button#submit:active { transform: translateY(1px); }

/* Result view */
.result h2 { margin: 0 0 10px; }
.result p  { margin: 0 0 16px; color: #374151; }
.restart-btn {
  width: 100%;
  border: 0;
  background: #10b981;
  color: #fff;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.restart-btn:hover { background: #059669; }