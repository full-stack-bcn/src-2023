"use client";

export default function ShowEnv() {
  return (
    <table>
      <tr>
        <td>
          <code>NEXT_PUBLIC_HOLA_QUE_TAL</code>
        </td>
        <td>
          <code>{process.env.NEXT_PUBLIC_HOLA_QUE_TAL}</code>
        </td>
      </tr>
      <tr>
        <td>
          <code>NEXT_PUBLIC_SECRETO_COMUN</code>
        </td>
        <td>
          <code>{process.env.NEXT_PUBLIC_SECRETO_COMUN}</code>
        </td>
      </tr>
    </table>
  );
}
