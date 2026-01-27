type PageLayoutProps = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function PageLayout({ title, children }: PageLayoutProps) {
    return (
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <section>{children}</section>
      </main>
    );
  }