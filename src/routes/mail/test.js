import isEmail from "$lib/utils/isEmail";

const _error = (message = 'Invalid Input', status = 422) => ({
  status, body: { error: message }
})

/** @type {import('@sveltejs/kit').RequestHandler} */
export const post = async ({ clientAddress, request, locals, params, url }) => {
	const form = await request.formData();
  const recipient =  form.get('to').trim()

  console.log(`A ${request.method.toUpperCase()} request came from "${clientAddress}" asking for ${url}`)

  if(!recipient || !isEmail(recipient)) return _error()

	return {
    body: {
      message: "Email Send to " + recipient
    }
  };
};