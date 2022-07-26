export default async (): Promise<[
        {
            Name: string,
            Price: number,
            Description: string,
            Image: string
        }
    ]> => {
    const response = await fetch("https://api.jsonstorage.net/v1/json/133af0c5-4a5c-46b6-b73a-9ef732260cb6/14e1f666-7e6a-44c9-b1f5-c6bc160acefa")
    if (!response.ok) throw new Error('Data cannot be downloaded')
    const result = await response.json()
    return result
}