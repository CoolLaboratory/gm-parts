
/**
 * @type {{
 *  cookies: Cookie[],
 *  add: (cookie: Cookie) => void
 * }}
 */
let ck = null


export default function cook() {
  if(ck) return ck

  ck = {
    cookies: [],
    add(cookie) { this.cookies.push(cookie) }
  }

  return ck
}