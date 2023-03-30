import styled from 'styled-components';
import { DEFAULT } from './utility';

const { WIDTH: DEFAULT_WIDTH, HEIGHT: DEFAULT_HEIGHT } = DEFAULT;

export const StyledCanvas = styled.canvas`
  width: ${(props: { width: string | string[]; }) => props.width ? `${props.width}${!props.width.includes('px') ? 'px' : ''}` : `${DEFAULT_WIDTH}px`};
  height: ${(props: { height: any; width: string | string[]; }) => props.height ? `${props.height}${!props.width.includes('px') ? 'px' : ''}` : `${DEFAULT_HEIGHT}px`};
  border-radius: 5px;
  overflow: hidden;
`;