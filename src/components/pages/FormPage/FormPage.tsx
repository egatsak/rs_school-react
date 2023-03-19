import { Component, ReactNode } from "react";
import Form from "../../widgets/Form/Form";

interface FormPageProps {
  children?: ReactNode;
}

export default class FormPage extends Component<FormPageProps> {
  constructor(props: FormPageProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className="page-heading">FormPage</h2>
        <Form />
      </div>
    );
  }
}
