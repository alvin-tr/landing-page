const expandElements = document.querySelectorAll('.expand');

const triggers = document.querySelectorAll('.flex-row');

triggers.forEach(function (trigger, index) {
    trigger.addEventListener('click', function () {
        // Thêm log để kiểm tra
        console.log('Click event triggered');

        // Tìm thẻ .expand tương ứng
        const expand = expandContainers[index];

        // Toggle max-height để mở rộng và thu gọn nội dung
        expand.classList.toggle('max-h-0');
        expand.classList.toggle('max-h-full');
    });
});