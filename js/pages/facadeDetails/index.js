import Header from '../common/header/index.js'

const FacadeDetails = {
    render: () => {
        return `
            <div class="sensor-details">
                <div class="sensor-details-main-wrapper">
                    ${Header.render()}
                    <main class="sensor-details-main">
                        <div class="sensor-details-main-top-header">
                            <h2 data-testid="sensor-detail-title" class="section-title">Détails du capteur #7</h2>
                        </div>
                        <div class="sensor-details-wrapper">
                            <div class="sensor-details-img-gallery-wrapper">
                                <img class="sensor-details-img" src="" alt="">
                            </div>
                            <div class="sensor-details-info-wrapper">
                                <div class="data-sensor-wrapper">
                                    <h3>Données du capteur</h3>
                                    <table class="data-table">
                                        <thead>
                                            <th>#</th>
                                            <th>Type de données</th>
                                            <th>Valeur des données</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <th>ID</th>
                                                <td class="sensor-id"></td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <th>Marque du capteur</th>
                                                <td class="sensor-brand"></td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <th>Status</th>
                                                <td class="sensor-status"></td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <th>Lattitude</th>
                                                <td class="sensor-lat"></td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <th>Longitude</th>
                                                <td class="sensor-lng"></td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <th>Température</th>
                                                <td class="sensor-temperature"></td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <th>Degrée d'humidité</th>
                                                <td class="sensor-moisture"></td>
                                            </tr>
                                            <tr>
                                                <th>8</th>
                                                <th>Date de dernière visite</th>
                                                <td class="sensor-last-inspection-date"></td>
                                            </tr>
                                            <tr>
                                                <th>9</th>
                                                <th>ID du technicien</th>
                                                <td class="sensor-engineer-id"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="weather-forecast-wrapper">
                                    <h3>Bulletin météo</h3>
                                    <table class="data-table">
                                        <thead>
                                            <th>#</th>
                                            <th>Type de données</th>
                                            <th>Valeur des données</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <th>Localisation</th>
                                                <td class="weather-location"></td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <th>Température</th>
                                                <td class="weather-temperature"></td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <th>Icône</th>
                                                <td>
                                                    <img class="weather-icon" src="" alt="">
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <th>Description</th>
                                                <td class="weather-description"></td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <th>Vent</th>
                                                <td class="weather-wind"></td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <th>Couverture nuageuse</th>
                                                <td class="weather-cloudcover"></td>
                                            </tr>
                                            <tr>
                                                <th>7</th>
                                                <th>Index UV</th>
                                                <td class="weather-uv-index"></td>
                                            </tr>
                                            <tr>
                                                <th>8</th>
                                                <th>Jour/nuit</th>
                                                <td class="weather-is-day"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        `
    }
}

export default FacadeDetails

