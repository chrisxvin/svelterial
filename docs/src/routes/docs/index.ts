export async function get() {
  return {
    headers: { Location: '/docs/components/materialapp' },
    status: 302,
  };
}
