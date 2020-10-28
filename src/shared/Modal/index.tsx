import React, { MouseEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Modal.styled';
import X from 'shared/icons/X';
import { FlexRow } from 'shared/styled/layout/FlexRow';
import { ModalProps } from './interface';
import { Box } from 'shared/styled/layout/Box';

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const history = useHistory();

  const onBack = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <S.Overlay onClick={onBack} />
      <S.Modal>
        <Box width={300} center>
          <FlexRow justify="flex-end">
            <S.CloseButton onClick={onBack}>
              <X />
            </S.CloseButton>
          </FlexRow>
          {title && <S.H2>{title}</S.H2>}

          {children}
        </Box>
      </S.Modal>
    </>
  );
};

export default Modal;
