export function createSelect(update) {
  return (val, { multiple, mandatory, max }) => {
    update(($value) => {
      if (multiple) {
        const $$value = Array.isArray($value) ? [...$value] : [$value];
        if ($$value.includes(val)) {
          if (!mandatory || $value.length > 1) {
            // unselect val
            $$value.splice($$value.indexOf(val), 1);
            return $$value;
          }
        } else if ($$value.length < max) {
          // select val
          return [...$$value, val];
        }
        return $value;
      } else {
        if (val === $value && !mandatory) return null;
        return val;
      }
    });
  };
}

export function isActive($value, val) {
  return Array.isArray($value) ? $value.includes(val) : val === $value;
}
