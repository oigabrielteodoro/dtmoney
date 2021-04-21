import Modal from "react-modal";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isNewTransactionModalOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  )
}