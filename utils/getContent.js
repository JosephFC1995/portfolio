export default async($content, params, error) => {
    const currentPage = parseInt(params.page)

    const perPage = 5

    const allArticles = await $content('blog').fetch()

    const totalArticles = allArticles.length

    const lastPage = Math.ceil(totalArticles / perPage)

    const lastPageCount = totalArticles % perPage

    const skipNumber = () => {
        if (currentPage === 1) {
            return 0
        }
        if (currentPage === lastPage) {
            return totalArticles - lastPageCount
        }
        return (currentPage - 1) * perPage
    }

    const paginatedArticles = await $content('blog')
        .only(['title', 'description', 'img', 'slug', 'author', 'author', 'tags', 'published'])
        .sortBy('published', 'desc')
        .limit(perPage)
        .skip(skipNumber())
        .fetch()

    if (currentPage === 0 || !paginatedArticles.length) {
        return error({
            statusCode: 404,
            message: 'No se encontraron artículos',
        })
    }

    return {
        allArticles,
        paginatedArticles,
    }
}