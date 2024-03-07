const DataFilterer = (datas, keywords) => {
  const result = datas.filter((data) => {
    return (
      data.ProjectName.includes(keywords) ||
      data.ProjectYear.includes(keywords) ||
      data.ProjectDescription.includes(keywords) ||
      data.ProjectProgrammingLanguage.includes(keywords)
    );
  });

  return result;
};

export default DataFilterer;
