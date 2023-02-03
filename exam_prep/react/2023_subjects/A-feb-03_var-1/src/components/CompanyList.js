import { useState, useEffect } from "react";
import CompanyStore from "../stores/CompanyStore";
import Company from "./Company";

const store = new CompanyStore();

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(store.getAll());
	console.log('companies', companies);
    store.emitter.addListener("UPDATE", () => {
      setCompanies(store.getAll());
    });
  }, []);

  const saveCompany = (id, company) => {
    store.saveOne(id, company);
  };

  return (
    <div>
		{companies.map((company) => (
			<Company item={company} onSave={saveCompany}></Company>
		))}
    </div>
  );
};

export default CompanyList;