import * as React from "react";

import Button from "@mui/material/Button";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./SectionUnlocking.css";

const SortableItem = SortableElement(({ value }) => (
    <div className="sortable">
        <p className="sortabletext">
            {value}
            <DragIndicatorIcon />
        </p>
    </div>
));

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value}
                />
            ))}
        </ul>
    );
});

export default function SectionUnlocking({}) {
    const [items, setItems] = React.useState([
        "Section 3",
        "Section 2",
        "Section 1",
    ]);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems((prevItem) =>
            arrayMoveImmutable(prevItem, oldIndex, newIndex)
        );
    };
    return (
        <div className="maincontainerunlocking">
            <p style={{fontWeight:'bolder',color:'#457497', fontSize:'25px'}}>Section Unlocking</p>
            <div className="unlocking">
                <p style={{ fontWeight: "bolder", color: "#457497" }}>
                    Unlock Section After:
                </p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="percentage">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#457497",
                            }}
                        >
                            80%
                        </p>
                    </div>
                    <p style={{ color: "#457497" }}>of</p>
                    <div className="tagname">
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#457497",
                            }}
                        >
                            Group Study Room
                        </p>
                    </div>
                </div>
                <Button
                    style={{
                        // "margin-right": "100px",
                        textTransform: "none",
                        borderColor: "red",
                        width: "200px",
                        backgroundColor: "#9DBFD8",
                        borderRadius: "50px",
                        color: "white",
                        height: "20px",
                        marginTop: "10px",
                        marginBottom: "5px",
                    }}
                    onClick={() => {
                        // handleAddSectionClick();
                    }}
                >
                    + Add new requirement
                </Button>
            </div>
            <div className="priority">
                <p style={{ fontWeight: "bolder", color: "#457497" }}>
                    Prioirty in Unlocking sections:
                </p>
                <SortableList items={items} onSortEnd={onSortEnd} />
            </div>
        </div>
    );
}
