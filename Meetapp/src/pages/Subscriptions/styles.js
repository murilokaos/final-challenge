import styled from 'styled-components/native';
import { light } from 'services/utils/colors';
import { fontSize, margin, padding } from 'services/utils/metrics';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${padding * 3}px;
  padding-right: ${padding * 3}px;
  padding-left: ${padding * 3}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Empty = styled.Text`
  font-size: ${fontSize}px;
  color: ${light};
  margin-top: ${margin * 1.5}px;
  text-align: center;
`;
