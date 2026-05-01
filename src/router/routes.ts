export enum Routes {
    home = '/',
    klubHaqqinda = '/klub-haqqinda',
    klubTarixi = '/klub-tarixi',
    nailiyyetler = '/nailiyyetler',
    oyuncuProfili = '/oyuncu-profili',
    oyuncuDetail = '/oyuncu-profili/:id',
    oyunlar = '/oyunlar',
    oyunDetail = '/oyunlar/:id',
    canliOyunlar = '/canli-oyunlar',
    xeberler = '/xeberler',
    xeberDetail = '/xeberler/:id',
    mehsullar = '/mehsullar',
    mehsulDetail = '/mehsullar/:id',
    iane = '/iane',
    forum = '/forum',
    forumCategory = '/forum/:categoryId',
    vakansiyalar = '/vakansiyalar',
    vakansiyaDetail = '/vakansiyalar/:id',
    auth = '/auth',
    login = '/auth/login',
    notFound = '*',
}

export const goTo = (route: string, param: string | number): string => {
    return route.replace(/:[^/]+/, String(param));
};

export const goToWithQuery = (route: string, param: Record<string, string | number>): string => {
    let path = route + '?';
    if (param) {
        for (const key in param) {
            if (path.slice(-1) !== '?') path += '&';
            path += key + '=' + param[key];
        }
    }
    return path;
};
