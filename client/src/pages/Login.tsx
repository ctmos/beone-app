export default function Login() {
  return (
    <form style={{ display: "grid", gap: 12, maxWidth: 320 }}>
      <h2>Login</h2>
      <input placeholder="E-Mail" type="email" required />
      <input placeholder="Passwort" type="password" required />
      <button>Einloggen</button>
    </form>
  );
}
