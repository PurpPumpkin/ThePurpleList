export async function fetchList() {
    const listJson = await fetch('/ThePurpleList/data/_list.json');
    const list = await listJson.json();
    return list;
}

export async function fetchMainList() {
    const listJson = await fetch('/ThePurpleList/data/_list.json');
    const list = await listJson.json();

    return Promise.all(
        list.map(async (path, index) => {
            const rank = index + 1;
            try {
                const levelJson = await fetch(`/ThePurpleList/data/${path}.json`);
                const level = await levelJson.json();
                return [null, { rank, path, ...level }];
            } catch (err) {
                return [path, null];
            }
        }),
    );
}
