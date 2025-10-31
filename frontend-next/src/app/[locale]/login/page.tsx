'use client'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <form className="flex flex-col gap-3 w-64">
        <input
          className="border rounded px-3 py-2"
          placeholder="Email"
          type="email"
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Password"
          type="password"
        />
        <button className="bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  )
}
