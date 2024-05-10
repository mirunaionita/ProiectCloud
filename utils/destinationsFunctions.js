export const getDestinations = async () => {
  try {
    const response = await fetch("/api/destinations", {
      method: "GET",
    });

    const data = await response.json();

    if (!data) {
      return [];
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDestination = async (id) => {
  try {
    const response = await fetch(`/api/destinations?id=${id}`, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createDestination = async (entry) => {
  try {
    const response = await fetch("/api/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDestination = async (entry) => {
    try {
        const response = await fetch('/api/destinations', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteDestination = async (id) => {
  try {
    const response = await fetch(`/api/destinations?id=${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
