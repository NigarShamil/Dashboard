import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";


export const VisitorsBlockWrap = styled.div`
${BlockWrapStyles}

.line-chart{
    width: 100%;
    height: 230px;

    .recharts-legend-item{
        align-items: center!important;
        margin-left: 8px;
        margin-right: 8px;
    }

    .recharts-surface{
        border-radius: 2px;
    }
}
`