let generationArray = [
  { id: -3, generation: { m: "greatGrandFather", f: "greatGranMother" } },
  { id: -2, generation: { m: "grandFather", f: "grandMother" } },
  { id: -1, generation: { m: "father", f: "mother" } },
  { id: 0, generation: { m: "me!", f: "me!" } },
  { id: 1, generation: { m: "document", f: "daughter" } },
  { id: 2, generation: { m: "grandSon", f: "grandDaughter" } },
  { id: 3, generation: { m: "greatGrandSon", f: "greatGrandDaughter" } },
];
function findingGeneration(id, gender) {
  const finding = generationArray.find((item) => item.id === id).generation[
    gender
  ];
  console.log(finding);
}
findingGeneration(0, "f");
