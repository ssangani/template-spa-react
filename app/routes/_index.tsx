import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Home Page" }];
};

export default function Index() {
  return (
    <div>
      <h1 data-testid="hello" className="text-center text-3xl font-bold p-8">
        Hello!
      </h1>
    </div>
  );
}
