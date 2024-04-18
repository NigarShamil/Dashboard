import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";



export const VolumeServiceWrap = styled.div`
${BlockWrapStyles}

.stacked-bar-chart{
width: 100%;
height: 250px;
margin-bottom: 20px;
}

.custom-legend-item-text-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -6px;

    .custom-legend-item-text {
        &:last-child {
          font-size: 13px;
          color: ${(props) => props.theme.colors.cadet};
          font-weight: 500;
        }
      }
}
`