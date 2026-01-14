
export function Footer() {
  return (
    <footer className="w-full py-4 px-8 mt-auto border-t border-border">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sweet Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
