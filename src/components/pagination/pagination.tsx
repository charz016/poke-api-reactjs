import *as React from "react";
import { Button } from "react-bootstrap";

const Pagination = (props: any) => {
    const { onLeftClick, onRightClick, page, totalPage } = props;


    return (
        <div className="pagination">
            <Button variant="light" onClick={onLeftClick}>
                <span>🡸</span>
            </Button>
            <div>
                {page} de {totalPage}
            </div>
            <Button variant="light" onClick={onRightClick}>
                <span>🡲</span>
            </Button>
        </div>
    )
}

export { Pagination }