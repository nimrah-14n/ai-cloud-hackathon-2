type UIState<T> = {
    loading: boolean;
    error?: string;
    data?: T;
  };
  
  export function UIStateHandler<T>({
    state,
    render
  }: {
    state: UIState<T>;
    render: (data: T) => JSX.Element;
  }) {
    if (state.loading) return <p>Loading...</p>;
    if (state.error) return <p className="text-red-500">{state.error}</p>;
    if (!state.data) return null;
  
    return render(state.data);
  }