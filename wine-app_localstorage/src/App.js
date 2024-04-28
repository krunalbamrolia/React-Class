import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import WineList from './components/WineList';
import WineForm from './components/WineForm';
import { loadWines, saveWines, generateNewId } from './localStorageUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [wines, setWines] = useState([]);
  const [editWine, setEditWine] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedWines = loadWines();
    setWines(savedWines);
  }, []);

  // open modal
  const handleOpenModal = (wine = null) => {
    setEditWine(wine);
    setShowModal(true);
  };

  // close model
  const handleCloseModal = () => {
    setEditWine(null);
    setShowModal(false);
  };

  //add data with sweet msg
  const handleAddWine = (wine) => {
    const newId = generateNewId();
    const newWines = [...wines, { ...wine, id: newId }];
    setWines(newWines);
    saveWines(newWines);

    Swal.fire({
      title: 'Wine Added',
      text: 'The wine has been successfully added.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    handleCloseModal();
  };

  //edit data with sweet msg
  const handleUpdateWine = (updatedWine) => {
    const newWines = wines.map((wine) =>
      wine.id === updatedWine.id ? updatedWine : wine
    );
    setWines(newWines);
    saveWines(newWines);

    Swal.fire({
      title: 'Wine Updated',
      text: 'The wine has been successfully updated.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    handleCloseModal();
  };

  //  delete data with conformation by sweet alert
  const handleDeleteWine = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to undo this action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        const newWines = wines.filter((wine) => wine.id !== id);
        setWines(newWines);
        saveWines(newWines);

        Swal.fire({
          title: 'Deleted!',
          text: 'The wine has been successfully deleted.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
  };

  return (

    <div>
      {/* Custom Header */}
      <div className='header' >
        <h1>Wine Bar Inventory</h1>
        <Button variant="primary" onClick={() => handleOpenModal()}>
          Add Wine
        </Button>
      </div>

      {/* Wine List */}
      <Container className="mt-4">
        <WineList wines={wines} onEdit={handleOpenModal} onDelete={handleDeleteWine} />
      </Container>

      {/* Wine Form Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editWine ? "Edit Wine" : "Add Wine"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WineForm
            initialWine={editWine}
            onSubmit={editWine ? handleUpdateWine : handleAddWine}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;

