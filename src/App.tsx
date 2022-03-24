import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    const [intro, setIntro] = useState<boolean>(true);
    const [use, setUse] = useState<boolean>(true);
    const [hooks, setHooks] = useState<boolean>(true);
    const [examples, setExamples] = useState<boolean>(true);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button
                onClick={() => {
                    setIntro(!intro);
                }}
            >
                Introduction
            </Button>
            <Button
                onClick={() => {
                    setUse(!use);
                }}
            >
                useState
            </Button>
            <Button
                onClick={() => {
                    setHooks(!hooks);
                }}
            >
                Hooks
            </Button>
            <Button
                onClick={() => {
                    setExamples(!examples);
                }}
            >
                Examples
            </Button>
        </div>
    );
}

export default App;
