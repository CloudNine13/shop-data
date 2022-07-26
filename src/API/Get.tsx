// https://jsonkeeper.com/b/BXKN

export default async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/BXKN")
    if (!response.ok) throw new Error('Data cannot be downloaded')
    const result = await response.json()
    return result
}