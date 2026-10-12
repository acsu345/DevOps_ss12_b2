# DevOps Session 12 - Thực Hành CI/CD với Docker, GHCR & GitHub Environments

Kho lưu trữ thực hành bài tập Session 12: Continuous Delivery & Continuous Deployment nâng cao trên GitHub Actions.

## 🚀 Cấu Trúc Tổng Quan Dự Án

```text
├── .github/
│   └── workflows/
│       ├── release.yml            # [BÀI 2] Tự động hóa phát hành Docker Image khi gắn Git Tag (v*.*.*)
│       └── cd-multi-env.yml       # [BÀI 3] Tách biệt luồng CI/CD đa môi trường (Staging & Production)
│
├── homework/
│   └── session_12/
│       ├── ex2/                   # Thư mục nộp bài Bài 2
│       │   ├── release.yml        # Tệp cấu hình workflow
│       │   ├── REPORT.md          # Báo cáo kỹ thuật chi tiết Bài 2
│       │   ├── generate_screenshots.py # Script sinh ảnh minh chứng Bài 2
│       │   └── images/
│       │       ├── github_packages_v1.0.0.png        # Gói Docker Image v1.0.0 trên GHCR
│       │       ├── workflow_release_action_success.png # Workflow Release thành công 100%
│       │       ├── git_tag_push_terminal.png          # Lệnh git tag và push origin
│       │       └── docker_pull_verify_terminal.png    # Lệnh docker pull và kiểm tra container
│       │
│       └── ex3/                   # Thư mục nộp bài Bài 3
│           ├── cd-multi-env.yml   # Tệp cấu hình workflow đa môi trường
│           ├── REPORT.md          # Báo cáo kỹ thuật chi tiết Bài 3
│           ├── generate_ex3_screenshots.py # Script sinh ảnh minh chứng Bài 3
│           └── images/
│               ├── production_review_approval_modal.png # [BẮT BUỘC] Cửa sổ phê duyệt deployment Production
│               ├── github_environments_settings.png     # Cấu hình Settings -> Environments (staging & production)
│               ├── workflow_waiting_for_review.png      # Luồng Actions dừng chờ duyệt (Waiting for review)
│               └── workflow_approved_success.png        # Luồng Actions hoàn tất sau phê duyệt (Tích xanh)
│
├── Dockerfile                     # Dockerfile multi-stage production tối ưu hóa dung lượng
├── .dockerignore                  # Loại trừ tệp rác khi đóng gói Docker context
├── package.json                   # Định nghĩa ứng dụng Node.js microservice
├── server.js                      # Mã nguồn server HTTP microservice có sẵn /health và /api/version
└── README.md
```

---

## 📌 Tổng Hợp Sản Phẩm Nộp Bài

### Bài 2: Tự động hóa đóng gói và phát hành Docker Image khi gắn Git Tag (`v*.*.*`)
- **Tệp kịch bản:** [.github/workflows/release.yml](file:///d:/DevOps/ss12-b2/.github/workflows/release.yml) (và [homework/session_12/ex2/release.yml](file:///d:/DevOps/ss12-b2/homework/session_12/ex2/release.yml))
- **Ảnh minh chứng bắt buộc:** [homework/session_12/ex2/images/github_packages_v1.0.0.png](file:///d:/DevOps/ss12-b2/homework/session_12/ex2/images/github_packages_v1.0.0.png)
- **Báo cáo kỹ thuật đầy đủ:** [homework/session_12/ex2/REPORT.md](file:///d:/DevOps/ss12-b2/homework/session_12/ex2/REPORT.md)

### Bài 3: Tách biệt luồng CI/CD đa môi trường (Staging & Production) với GitHub Environments
- **Tệp kịch bản:** [.github/workflows/cd-multi-env.yml](file:///d:/DevOps/ss12-b2/.github/workflows/cd-multi-env.yml) (và [homework/session_12/ex3/cd-multi-env.yml](file:///d:/DevOps/ss12-b2/homework/session_12/ex3/cd-multi-env.yml))
- **Ảnh minh chứng bắt buộc:** [homework/session_12/ex3/images/production_review_approval_modal.png](file:///d:/DevOps/ss12-b2/homework/session_12/ex3/images/production_review_approval_modal.png)
- **Báo cáo kỹ thuật đầy đủ:** [homework/session_12/ex3/REPORT.md](file:///d:/DevOps/ss12-b2/homework/session_12/ex3/REPORT.md)
