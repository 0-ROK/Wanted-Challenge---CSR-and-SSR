function useRouter() {
  const push = (url: string) => {
    location.replace(url);
  };
  return {
    push,
  };
}

export default useRouter;
