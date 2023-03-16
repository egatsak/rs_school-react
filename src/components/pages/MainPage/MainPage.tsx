import React, { Component } from "react";
import Input from "../../shared/ui/Input/Input";
import CardList from "../../widgets/CardList/CardList";

import { LOCAL_STORAGE_INPUT_KEY } from "../../../constants";

import styles from "./MainPage.module.css";

interface MainPageProps {
  children?: React.ReactNode;
}

interface MainPageState {
  value: string;
}

export default class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  saveStateToLocalStorage() {
    window.localStorage.setItem(LOCAL_STORAGE_INPUT_KEY, this.state.value);
  }

  componentDidMount() {
    const data = window.localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
    if (data) {
      this.setState({ value: data });
    }

    window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));

    this.saveStateToLocalStorage();
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <h2 className="page-heading">MainPage</h2>
        <Input value={this.state.value} onChange={this.handleChange} className={styles.input} data-testid="input" />
        <CardList></CardList>
      </div>
    );
  }
}
