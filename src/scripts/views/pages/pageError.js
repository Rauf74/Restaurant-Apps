const errorPage = (error) => {
    const body = document.querySelector("body");
    const pageError = document.createElement("div");
    pageError.setAttribute("class", "error-page");
    body.innerHTML = "";
    pageError.innerHTML = `
        <div class="error-page-content">
            <div class="error-page-content-text">
                <div class="error-page-title">ERROR</div>
                <p class="error-page-message">${error}</p>
                <div class="error-page-description">Perangkat Offline. Cek Koneksi Internet, lalu refresh halaman.</div>
                <p class="click-here">Klik Tombol Reload dibawah untuk me-refresh halaman</p>
                <button onclick="window.location.reload()">Refresh</button>
            </div>
        </div>
    `;
    body.appendChild(pageError);
};

export default errorPage;
