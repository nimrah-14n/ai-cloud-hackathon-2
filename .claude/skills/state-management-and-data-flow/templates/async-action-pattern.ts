export async function asyncAction(
    action: () => Promise<void>,
    setError: (e: string | null) => void
  ) {
    try {
      setError(null)
      await action()
    } catch (err: any) {
      setError(err.message)
    }
  }