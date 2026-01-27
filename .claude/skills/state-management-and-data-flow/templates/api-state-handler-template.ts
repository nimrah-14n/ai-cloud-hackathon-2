export async function handleApiCall<T>(
    apiFn: () => Promise<T>,
    onSuccess: (data: T) => void,
    onError: (msg: string) => void,
    setLoading: (v: boolean) => void
  ) {
    try {
      setLoading(true)
      const data = await apiFn()
      onSuccess(data)
    } catch (e: any) {
      onError(e.message || "Unexpected error")
    } finally {
      setLoading(false)
    }
  }