const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets/${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok error`, apiRes.status);
  }

  return apiRes.json();
};

export default fetchPet;
