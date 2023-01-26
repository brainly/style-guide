const mergeRefs = (...refs) => {
  return (node) => {
    refs.forEach(ref => {
      if (typeof ref === "function") 
        ref(node);
       else if (ref !== null) 
        ref.current = node;
    });
  };
};

export default mergeRefs;