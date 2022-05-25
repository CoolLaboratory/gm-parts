import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

const toSec = (minutes) => minutes * 60
const toMin = (hours) => hours * toSec(60)
const toHours = (days) => days * toMin(24)
const toDays = (weeks) => weeks * toHours(7)
const toWeeks = (months) => months * toDays(4)
const toMonths = (years) => years * toWeeks(12)

const years = (amount) => toMonths(amount)

/** 
 * @type {import('@sveltejs/kit').Handle} 
 * @returns { Response }
 */
export async function first({ event, resolve }) {
  console.log('first pre-processing');

	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.deviceid = cookies.deviceid || uuid();

	console.log(event.request.headers)

  const response = await resolve(event);
	if (!cookies.deviceid) {

		const protocolo = new URL(event.request.url).protocol
		console.log(protocolo)

		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('deviceid', event.locals.deviceid, {
				path: '/',
				httpOnly: true,
				expires: new Date('2022/12/31'),
				secure: protocolo == 'https:' ? true : false
			})
		);
	}

  console.log('first post-processing');
	return response;

}
 
// 5fa5a78d-0614-4670-bb2f-431d1dc20acb
/** 
 * @type {import('@sveltejs/kit').Handle} 
 * @returns { Response }
 */
export async function second({ event, resolve }) {
  console.log('second pre-processing');
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies.userid || uuid();


  const result = await resolve(event);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		result.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}
  console.log('second post-processing');
  return result;
}