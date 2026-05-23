async function getCurrentUser(){

  const {
    data,
    error
  } = await supabaseClient
        .auth
        .getUser()

  return data.user

}

async function requireAuth(){

  const user =
    await getCurrentUser()

  if(!user){

    window.location.href =
      "login.html"

  }

}
