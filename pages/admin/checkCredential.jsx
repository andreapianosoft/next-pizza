const checkCredential = async (e) => {
    e.preventDefault();

    const config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        },
    };

    const data = { email: email, password: password };

    try {
        setLoading(true);

        const response = await axios.post('/api/login', data, config);

        if (response.data.user) {
            setLoading(false);
            utility?.add(
                { ...response.data.user, token: response.data.token },
                currentUserData?.getter,
                currentUserData?.setter
            );
            setUser({ ...response.data.user, token: response.data.token });
            router.push('/admin');
            setWelcome(`Welcome back ${user?.name}`);
            toast.success('Logged!');
        }
    } catch (err) {
        setLoading(false);
        toast.error(err.message);
        currentUserData?.setter([]);
    }
};
