const validateFields = (
  fields: Record<string, any>,
  requiredFields: string[]
) => {
  const missingFields: string[] = [];

  requiredFields.forEach((field) => {
    if (!fields[field]) {
      missingFields.push(field);
    }
  });

  if (missingFields.length > 0) {
    throw new Error(
      `Os seguintes campos estão faltando: ${missingFields.join(", ")}.`
    );
  }
};

export default validateFields;
